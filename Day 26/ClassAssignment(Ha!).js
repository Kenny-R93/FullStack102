// Create a class of `Job` with the following properties:
//name, industry, requiresDegree, field, any other relevant properties (get creative!)
class Job {
    constructor(name, industry, requiresDegree, field, YearsOfExperience, salary) {
        this.name = name;
        this.industry = industry;
        this.requiresDegree = requiresDegree;
        this.field = field;
        this.YearsOfExperience = YearsOfExperience;
        this.salary = salary;
    }
    getName() {             // The following methods:
        return this.name;   // getName,getFieldAndIndustry,any other relevant methods (optional)
    }
    getFieldAndIndustry() {
        return this.field + "&" + this.industry;
    }
    getYearsOfExperience() {
        return this.YearsOfExperience;
    }
};

// Now that you have all that set up, you must accomplish the following:
// Create three different instances of the Job class
// Console log any 2 methods for each instance of the class
    const job1 = new Job("Software Engineer", "Software Engineering", "Yes", "Computer Science", "2",);
    console.log(job1.getName()+ " requires a degree");
    console.log("This job is related to "+ job1.getFieldAndIndustry());
    console.log("The years of experience required is" + job1.getYearsOfExperience());

    const job2 =  new Job("Senior Cloud Engineer", "Software Engineering", "Yes", "Computer Science", "5");
    console.log(job2.getName()+ " requires a degree");
    console.log("This job is related to "+ job2.getFieldAndIndustry());

    const job3 = new Job("Restaruant Manager", "Hospitality", "No", "Food & Service Management","3");
    console.log(job3.getName()+ " does NOT requires a degree");
    console.log("This job is related to "+ job3.getFieldAndIndustry());
    console.log("The years of experience required is " + job3.getYearsOfExperience());

// Create an instance of the extended class
// Console log 2 new methods from the extended class
class remoteJob extends Job {
    constructor(name, industry, requiresDegree, field, YearsOfExperience, salary, hourly, location, remote) {
        super(name, industry, requiresDegree, field, YearsOfExperience, salary);
        this.salary = salary;
        this.hourly = hourly;
        this.location = location;
        this.remote = remote;
    }
    getSalary () {
        return this.salary;
    }
    getHourly () {
        return this.hourly;
    }
    getLocation() {
        return this.location;
    }

    getRemote() {
        return this.remote;
    }
};

const remoteJob1 = new remoteJob("Software Developer", "Software Engineering", "Yes", "Computer Science","2", "85-100k", "N/A", "Charlotte, NC", "remote");
console.log("This job is " + remoteJob1.getRemote());
console.log("The location of this job is in: " + remoteJob1.getLocation());
console.log(remoteJob1);

