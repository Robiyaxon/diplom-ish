const History=require('../model/history');


exports.create = (req, res) => {
    const history = new History({
        title:req.body.title,
        description:req.body.description,
        bemorId:req.body.bemorId
    });
    history.save()
    .then(data => {
        res.status(200).json({success: true, data});
    }).catch(err => {
        res.status(400).json({
            message: err.message || "Something wrong while creating thehistory."
        });
    });
};
exports.getAll = async (req, res) => {
    return res.status(200).json({success: true, data: await History.find()})
}

exports.getOne = async (req, res) => {
    await History.findOne({_id: req.params.id}).select({})
    .then(data => {
        return res.status(200).json({success: true, data})
    }).catch(err => {
        return res.status(500).json({success: false, message: err})
    });
}
exports.delete = async (req, res) => {
    await History.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            return res.status(400).json({success: false, message: "Not found"})
        }
        res.status(200).json({success: true, data: []})
    })
}