import cloudImage from './cloud.png';
import moonImage from './moon.png';
import './clouds.css';

export function CloudsLeft() {
  return (
    <div className="clouds">
      <img
        className="cloud-gelatine"
        src={cloudImage}
        style={{
          position: 'fixed',
          top: 60,
          left: 170,
          width: 150,
          height: 150,
          animationDuration: '7s',
        }}
      />
    </div>
  );
}

export function CloudsRight() {
  return (
    <div className="clouds">
      <img
        className="moon-gelatine"
        src={moonImage}
        style={{
          position: 'fixed',
          top: 50,
          right: '20%',
          width: 250,
          height: 250,
          animationDuration: '5s',
        }}
      />
      <img
        className="cloud-gelatine"
        src={cloudImage}
        style={{
          position: 'fixed',
          top: 180,
          right: '21%',
          width: 150,
          height: 150,
          animationDuration: '7s',
        }}
      />
      <img
        className="cloud-gelatine"
        src={cloudImage}
        style={{
          position: 'fixed',
          top: 200,
          left: '50%',
          width: 300,
          height: 300,
          opacity: 0.8,
          animationDuration: '6s',
        }}
      />
    </div>
  );
}
