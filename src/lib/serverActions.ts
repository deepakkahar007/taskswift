"use server";

export const createTask = async (formdata: FormData) => {
  console.log(formdata.get("date"));
  console.log(Date.UTC(2023));
  return;
};
