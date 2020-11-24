const members = require('../modal/members');
const Response = require('../utils/response');
const success = 'success';
const fail = 'fail';

exports.findMember = async (req, res) => {
  const { id } = req.params;

  members.findOne({ profile: id }, (err, doc) => {
    if (err) return res.json(Response(fail, '没找到会员信息'));
    return res.json(Response(success, doc));
  });

}

exports.joinMember = async (req, res) => {
  const { level, id } = req.body;

  // 根据id找到对应的member
  const findMember = await members.findOne({  profile: id});
  if (findMember) {
    return res.send(Response(fail, '您已经是会员'));
  }
  const member = new members({
    level: level,
    isMembership: true,
    status: 'active',
    profile: id
  })
  member.save((err, doc) => {
    if (err) return res.join(Response(fail, '加入会员失败'));
    return res.json(Response(success, doc))
  });
}
