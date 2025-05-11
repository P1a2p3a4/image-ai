
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import preview from '../assets/preview.png';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';
import "../pageCss/CreatePost.css";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', prompt: '', photo: ''
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("https://localhost:8080/api/v1/dalle", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: form.prompt })

        })
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert('Error generating image: ' + error.message);
      } finally {
        setGeneratingImg(false);
      }
    }
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.prompt && form.photo) {
      setLoading(true);
    }

    try {
      
      const response = await fetch('https://localhost:8080/api/v1/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      await response.json();
      navigate('/');
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="create-post-container">
      <div className="header">
        <h1>Create</h1>
        <p>Create imaginative and visually stunning images through DALL-E AI and share them with the community.</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <FormField
          labelName="Your name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={form.name}
          handleChange={handleChange}
        />

        <FormField
          labelName="Prompt"
          type="text"
          name="prompt"
          placeholder="A plush toy robot sitting against a yellow wall"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
        />

        <div className="image-preview">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="preview-image"
            />
          ) : (
            <img
              src={preview}
              alt="Preview"
              className="preview-image"
            />)}

          {generatingImg && (
            <div className="loader">
              <Loader />
            </div>
          )}

        </div>




        <div className="button-group">
          <button
            type="button"
            className="btn"
            onClick={generateImage}
            disabled={generatingImg}
          >

            {generatingImg ? 'Generating...' : 'Generate Image'}
          </button>
        </div>

        <div className="button-group">
          <p>Once you have created the image, you can share it with the community.</p>
          <button
            type="submit"
            className="btn"
            disabled={loading}
          >
            {loading ? 'Sharing...' : 'Share with the community'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
