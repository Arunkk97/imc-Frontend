import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverURL";

//register api
export const registerAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)

}

//login
export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)

}

//bookAppointment
export const bookAppointmentAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/book-appointment`,reqBody,reqHeader)

}

//get all appointment
export const getAllAppointmentsAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/all-appointments`,"")
}

//get user appointment

export const getUSerAppointmentsAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-appointments`,"",reqHeader)
}

//job post admin
export const jobPostAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/job-post`,reqBody,reqHeader)

}

//get All job admin
export const getJobPostAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/getAllJob`,"",reqHeader)
}

//remove job
export const removeJobAPI=async(jobId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/removeJob/${jobId}`,{},reqHeader)
}

//edit job
export const editJobAPI=async(jobId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/editJob/${jobId}`,reqBody,reqHeader)
}

//get All careers job
export const getCareerJobAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/getCareersJob`,"")
}

//apply job appli
export const jobApplicationAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/jobApplication`,reqBody,reqHeader)
}

//get job application  admin
export const getAllJobApplicationAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/getAllJobApplication`,"",reqHeader)
}

//add doctor
export const addDoctorAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/addDoctor`,reqBody,reqHeader)
}

//get doctor admin
export const getAllDoctorAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/getAllDoctors`,"",reqHeader)
}

//remove doctor

export const removeDoctorAPI=async(docId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/removeDoctor/${docId}`,{},reqHeader)
}

//edit doctor
export const editDoctorAPI=async(docId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/editDoctor/${docId}`,reqBody,reqHeader)
}

//get all doctor home page
export const getAllDoctorHomeAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/homeDoctor`,"",reqHeader)
}

// get all doctors appoint
export const getAllDoctorAppointAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/allDoctorAppoint`,"",reqHeader)
}

//get job application  count
export const getAllJobApplicationCountAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/getAllJobApplicationCount`,"")
}

//get All Doc and Dep
export const getAllDocAndDepAPI=async(dId)=>{
    return await commonAPI("GET",`${SERVER_URL}/getDocAndDep/${dId}`,"")
}



