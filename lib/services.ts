import emailjs from '@emailjs/browser';

export const sendEmail = async (emailData: any) => {
    let serviceID: string
    let templateID: string
    let userID: string

    if (process.env.EMAILJS_SERVICE_ID) {
        serviceID = process.env.EMAILJS_SERVICE_ID as string
    } else {
        throw new Error("EMAILJS_SERVICE_ID environment variable is not set")
    }

    if (process.env.EMAILJS_TEMPLATE_ID) {
        templateID = process.env.EMAILJS_TEMPLATE_ID as string
    } else {
        throw new Error("EMAILJS_TEMPLATE_ID environment variable is not set")
    }

    if (process.env.EMAILJS_PUBLIC_KEY) {
        userID = process.env.EMAILJS_PUBLIC_KEY as string
    } else {
        throw new Error("EMAILJS_PUBLIC_KEY environment variable is not set")
    }

    return emailjs.send(serviceID, templateID, emailData, userID)
    .then((result) => {
        console.log(result.text);
        return true;
    }, (error) => {
        console.log(error);
        return false;
    });
};

export const getGDriveImageLink = (fileId: string) => {
    const url = `https://drive.google.com/thumbnail?id=${fileId}&sz=s4000`
    return url
}

export const getGDriveFileID = (url: string) => {
    const splitUrl = url.split("/").slice(-2)
    const fileId = splitUrl[0]
    return fileId
}

export const capitalize = (s: string) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const removeUnderScores = (s: string) => {
    return s.replace(/_/g, ' ')
}