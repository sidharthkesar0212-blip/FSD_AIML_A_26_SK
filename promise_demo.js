function register() { 
  return new Promise((resolve) => { 
    setTimeout(() => { 
      console.log("register here"); 
      resolve(); 
    }, 1000); 
  }); 
} 

function login() { 
  return new Promise((resolve) => { 
    setTimeout(() => { 
      console.log("login here"); 
      resolve(); 
    }, 8000); 
  }); 
} 

function get_data() { 
  return new Promise((resolve) => {
    setTimeout(() => { 
      console.log("Fetch data"); 
      resolve(); 
    }, 10000); 
  });
} 

function display_data() { 
  return new Promise((resolve) => {
    setTimeout(() => { 
      console.log("Display data"); 
      resolve(); 
    }, 12000); 
  });
} 

async function runWorkflow() {
  try {
    await register();
    await login();
    await get_data();
    await display_data();
    console.log("All steps completed successfully!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Execute the workflow
runWorkflow();
