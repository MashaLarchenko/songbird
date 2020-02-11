// export default function getRightAndwerData(
//     setData,
//     birdData,
//     species,
//     id,
//     setRightAnswer,
//     rightAnswer,
//     answerBird,
//     setScore,
//     score
// ) {
//     answerBird.status[1] = 'rightAnswer';
//     setData({
//         ...birdData,
//         status: {
//             ...birdData.status,
//             noRightAnswer: false,
//             isAnswered: true,
//             startQ: true,
//             selectedBird: species,
//             birdId: id,
//         },
//         data: data.recordings[0],
//         image: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
//         song: 'src/assets/correct-answer.mp3',
//     });
//     setRightAnswer({
//         ...rightAnswer,
//         name: `${answerBird.name}(${answerBird.species})`,
//         audio: data.recordings[0].file,
//         image: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
//     });
//     setScore({
//         score: score.score + (5 - score.try),
//         try: score.try + 1,
//     });
// }
