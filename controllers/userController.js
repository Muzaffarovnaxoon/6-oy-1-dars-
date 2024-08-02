const GetUser = (req, res) => {
    const user = req.body.user
    if (!user) {
        return res.status(404).json({ message: "User not found"})
    } else {
        return res.send({
            success: true,
            data: user
        })
    }
}