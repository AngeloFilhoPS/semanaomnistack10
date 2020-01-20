import React,{useState,useEffect} from 'react';

function DevForm({onSubmit}) {

  const [github_username, setGitUsername] = useState('');
  const [tech, setTech] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(

      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

async function handleSubmit(e){
    e.preventDefault();
    
   await  onSubmit(
        {
      github_username,
      tech,
      latitude,
      longitude,
    });
    setGitUsername('');
    setTech('');
}
  
    return(
 <form onSubmit={handleSubmit} >

          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGitUsername(e.target.value)} />
          </div>

          <div className="input-block">
            <label htmlFor="tech">Tecnologias</label>
            <input name="tech" 
            id="tech" 
            required
            value={tech}
            onChange={e=>setTech(e.target.value)}
             />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number"
                name="latitude"
                id="latitude" required
                value={latitude}
                onChange={e => setLatitude(e.target.value)} 
                />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Latitude</label>
              <input type="number"
                name="longitude"
                id="longitude" required
                value={longitude}
                onChange={e => setLongitude(e.target.value)} 
                />
            </div>
          </div>

          <button type="submit">Cadastrar</button>
    </form>
    );    
}
    export default DevForm; 
