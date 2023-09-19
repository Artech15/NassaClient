import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const validationSchema = yup.object({
  type: yup
    .string()
    .required('Type is required')
    .oneOf(['bootcamp', 'course'], 'Invalid type'),
  displayName: yup.string().required('Display Name is required'),
  start: yup.date().required('Start date is required'),
  end: yup.date().nullable(),
  owner: yup.string().nullable(),
  parentId: yup.string().nullable(),
  public: yup.boolean().required('Public is required'),
  joinable: yup.boolean().required('Joinable is required'),
  active: yup.boolean().required('Active is required'),
  data: yup.object().shape({
    branch: yup.string().nullable(),
    bootcamp: yup.object().when('type', {
      is: 'bootcamp',
      then: yup.object().shape({
        generated: yup.string().nullable(),
      }),
      otherwise: yup.object().nullable(),
    }),
    courses: yup.object().when('type', {
      is: 'course',
      then: yup.object().shape({
        generated: yup.string().nullable(),
      }),
      otherwise: yup.object().nullable(),
    }),
  }),
});

export default function Group() {
  const formik = useFormik({
    initialValues: {
      type: '',
      displayName: '',
      start: '',
      end: null,
      owner: null,
      parentId: null,
      public: true,
      joinable: true,
      active: false,
      data: {
        branch: '',
        bootcamp: {
          generated: '',
        },
        courses: {
          generated: '',
        },
      },
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="type"
        name="type"
        label="Type"
        select
        variant="outlined"
        value={formik.values.type}
        onChange={formik.handleChange}
        error={formik.touched.type && Boolean(formik.errors.type)}
        helperText={formik.touched.type && formik.errors.type}
      >
        <MenuItem value="bootcamp">Bootcamp</MenuItem>
        <MenuItem value="course">Course</MenuItem>
      </TextField>

      <TextField
        fullWidth
        id="displayName"
        name="displayName"
        label="Display Name"
        variant="outlined"
        value={formik.values.displayName}
        onChange={formik.handleChange}
        error={formik.touched.displayName && Boolean(formik.errors.displayName)}
        helperText={formik.touched.displayName && formik.errors.displayName}
      />

      <TextField
        fullWidth
        id="start"
        name="start"
        label="Start Date"
        type="date"
        variant="outlined"
        value={formik.values.start}
        onChange={formik.handleChange}
        error={formik.touched.start && Boolean(formik.errors.start)}
        helperText={formik.touched.start && formik.errors.start}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        fullWidth
        id="end"
        name="end"
        label="End Date"
        type="date"
        variant="outlined"
        value={formik.values.end}
        onChange={formik.handleChange}
        error={formik.touched.end && Boolean(formik.errors.end)}
        helperText={formik.touched.end && formik.errors.end}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        fullWidth
        id="owner"
        name="owner"
        label="Owner"
        variant="outlined"
        value={formik.values.owner}
        onChange={formik.handleChange}
        error={formik.touched.owner && Boolean(formik.errors.owner)}
        helperText={formik.touched.owner && formik.errors.owner}
      />

      <TextField
        fullWidth
        id="parentId"
        name="parentId"
        label="Parent ID"
        variant="outlined"
        value={formik.values.parentId}
        onChange={formik.handleChange}
        error={formik.touched.parentId && Boolean(formik.errors.parentId)}
        helperText={formik.touched.parentId && formik.errors.parentId}
      />

      <FormControl fullWidth variant="outlined">
        <InputLabel id="public-label">Public</InputLabel>
        <Select
          labelId="public-label"
          id="public"
          name="public"
          value={formik.values.public}
          onChange={formik.handleChange}
          label="Public"
          error={formik.touched.public && Boolean(formik.errors.public)}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined">
        <InputLabel id="joinable-label">Joinable</InputLabel>
        <Select
          labelId="joinable-label"
          id="joinable"
          name="joinable"
          value={formik.values.joinable}
          onChange={formik.handleChange}
          label="Joinable"
          error={formik.touched.joinable && Boolean(formik.errors.joinable)}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined">
        <InputLabel id="active-label">Active</InputLabel>
        <Select
          labelId="active-label"
          id="active"
          name="active"
          value={formik.values.active}
          onChange={formik.handleChange}
          label="Active"
          error={formik.touched.active && Boolean(formik.errors.active)}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl>

      {/* Fields for 'data' object */}
      <TextField
        fullWidth
        id="branch"
        name="data.branch"
        label="Branch"
        variant="outlined"
        value={formik.values.data.branch}
        onChange={formik.handleChange}
        error={formik.touched['data.branch'] && Boolean(formik.errors['data.branch'])}
        helperText={formik.touched['data.branch'] && formik.errors['data.branch']}
      />

      {formik.values.type === 'bootcamp' && (
        <TextField
          fullWidth
          id="bootcamp.generated"
          name="data.bootcamp.generated"
          label="Bootcamp Generated"
          variant="outlined"
          value={formik.values.data.bootcamp.generated}
          onChange={formik.handleChange}
          error={formik.touched['data.bootcamp.generated'] && Boolean(formik.errors['data.bootcamp.generated'])}
          helperText={formik.touched['data.bootcamp.generated'] && formik.errors['data.bootcamp.generated']}
        />
      )}

      {formik.values.type === 'course' && (
        <TextField
          fullWidth
          id="courses.generated"
          name="data.courses.generated"
          label="Courses Generated"
          variant="outlined"
          value={formik.values.data.courses.generated}
          onChange={formik.handleChange}
          error={formik.touched['data.courses.generated'] && Boolean(formik.errors['data.courses.generated'])}
          helperText={formik.touched['data.courses.generated'] && formik.errors['data.courses.generated']}
        />
      )}

      <Button type="submit" variant="contained" color="primary">
        Create Group
      </Button>
    </form>
  );
};

