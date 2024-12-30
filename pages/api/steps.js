// pages/api/steps.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { stepCount } = req.body;

        // 서버에서 걸음수 데이터 처리
        console.log('Received step count:', stepCount);

        // 예: 데이터베이스에 저장하거나 다른 작업을 수행
        res.status(200).json({ message: 'Step count received', stepCount });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
