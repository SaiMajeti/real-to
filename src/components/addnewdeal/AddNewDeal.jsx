import React, { useState } from "react";
import './AddNewDeal.css';
import Container from '@mui/material/Container';

import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  FormHelperText,
  Select,
  MenuItem,
  FormControl

} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { InputLabel } from "@mui/material";
 
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: "#fbaf62",
    color: "white",
  },
  step: {
    "& $completed": {
      color: "green"
    },
    "& $active": {
      color: "#fbaf62"
    },
    
  },
  active: {}, //needed so that the &$active tag works
  completed: {},
}));

function getSteps() {
  return [
    "Overview",
    "Financial Details",
    "Key Highlights",
    "Location Details",
    "Documents",
    "FAQs",
    "Publish"
  ];
}
const Overview = () => {
  const { control } = useFormContext();
  return (
    <Container style={{borderColor: "gray"}}>
    <FormControl style = {{display: "flex", justifyContent:"flex-start", width: 250}}>
    <InputLabel style={{textAlign: "left"}}>Deal Name</InputLabel>
      <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField  
            helperText="Type in project name"
            disabled
            id="project name"
            variant="filled"
            placeholder="Project name..."
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="developerName"
        render={({ field }) => (
          <TextField
            style = {{display: "flex", justifyContent:"flex-start", width: 250}}
            disabled
            id="developer name"
            label="Developer Name"
            variant="outlined"
            helperText="Type in developer name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      </FormControl>
      <Controller
        control={control}
        name="Asset Class"
        render={({ field }) => (
        <FormControl style = {{display: "flex", justifyContent:"flex-start", width: 250}}>
            <InputLabel style={{textAlign: "left"}}>Asset Class</InputLabel>
            <Select
                variant="filled"
                defaultValue={1}
                {...field}
            >
                <MenuItem value={1}>Residential</MenuItem>
                <MenuItem value={2}>Asset Class1</MenuItem>
            </Select>
            <FormHelperText>Select asset class</FormHelperText>
        </FormControl>
        )}
      />
      <Controller
        control={control}
        name="Asset Class"
        render={({ field }) => (
        <FormControl style = {{display: "flex", justifyContent:"flex-start", width: 250}}>
            <InputLabel style={{textAlign: "left"}}>Deal Status</InputLabel>
            <Select
                variant="filled"
                defaultValue={1}
                {...field}
            >
                <MenuItem value={1}>Fundrising</MenuItem>
                <MenuItem value={2}>Asset Class1</MenuItem>
            </Select>
            <FormHelperText>Status</FormHelperText>
        </FormControl>
        )}
      />
      <Controller
        control={control}
        name="Asset Class"
        render={({ field }) => (
        <FormControl style = {{display: "flex", justifyContent:"flex-start", width: 250}}>
            <InputLabel style={{textAlign: "left"}}>Visibility</InputLabel>
            <Select
                variant="filled"
                defaultValue={1}
                {...field}
            >
                <MenuItem value={1}>Public</MenuItem>
                <MenuItem value={2}>Asset Class1</MenuItem>
            </Select>
            <FormHelperText>Select market place visbility</FormHelperText>
        </FormControl>
        )}
      />
    </Container>
  );
};
const FinancialDetails = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <Container>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.nickName)}
            helperText={errors.nickName?.message}
          />
        )}
      />
    </Container>
  );
};
const KeyHighlights = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <Container>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.nickName)}
            helperText={errors.nickName?.message}
          />
        )}
      />
    </Container>
  );
};
const LocationDetails = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <Container>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.nickName)}
            helperText={errors.nickName?.message}
          />
        )}
      />
    </Container>
  );
};
const Documents = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <Container>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.nickName)}
            helperText={errors.nickName?.message}
          />
        )}
      />
    </Container>
  );
};
const FAQs = () => {
  const { control } = useFormContext();
  return (
    <Container>
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </Container>
  );
};
const Publish = () => {
  const { control } = useFormContext();
  return (
    <Container>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </Container>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Overview />;
    case 1:
      return <FinancialDetails />;
    case 2:
      return <KeyHighlights />;
    case 3:
      return <LocationDetails />;
    case 4:
        return <Documents />;
    case 5:
        return <FAQs />;
    case 6:
        return <Publish />;
    default:
      return "unknown step";
  }
}

const AddNewDeal = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep} classes={{root: classes.root}}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          
          if (isStepFalied() && activeStep == index) {
            labelProps.error = true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step 
                {...stepProps} 
                key={index}
                classes={{
                  root: classes.step,
                  completed: classes.completed,
                  active: classes.active
                }}
            >
            <StepLabel {...labelProps} 
                StepIconProps={{
                    classes: {
                    root: classes.step,
                    completed: classes.completed,
                    active: classes.active,
                }
                }}
            >
                {step}
            </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                color="white"
                onClick={handleBack}
              >
                back
              </Button>

              <Button
                className={classes.button}
                variant="contained"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Publish" : "Save as draft and continue"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default AddNewDeal;