import React from "react";

const UrlForm = ({ handleSubmit, setFormData }) => {
  return (
    <form onSubmit={handleSubmit} className="my-4 form-inline">
      <label htmlFor="fullUrl" className="sr-only">
        Url
      </label>
      <input
        required
        placeholder="Please enter your URL"
        type="url"
        name="fullUrl"
        id="fullUrl"
        className="form-control col mr-2"
        onChange={(e) => setFormData({ [e.target.name]: e.target.value })}
      />
      <button className="btn btn-outline-primary" type="submit">
        COMPRESS URL
      </button>
    </form>
  );
};

export default UrlForm;
