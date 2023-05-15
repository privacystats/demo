const stories = [];

for (let i = 1; i <= 30; i++) {
  const fileName = `http://127.0.0.1:8080/vdo (${i}).mp4`;
  stories.push({ video: fileName });
}

const Stories = () => {
  return (
    <div className="stories z-10 h-62 w-96 justify-around">
        {stories.map((story, index) => (
            <div key={index} className="str p-2 rounded-lg bg-gray-100 bg-opacity-5 text-white mb-2">
                <video className="vid w-96 outline-none " controls loop muted>
                    <source src={story.video} type="video/mp4" />
                </video>
                <span>{story.name}</span>
            </div>
        ))}

    </div>
  )
}

  

export default Stories