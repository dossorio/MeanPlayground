/**
 * Created by dossorio on 12/05/2014.
 */

var tankRoutes = function (router, Tank) {

    router.get('', function (req, res) {

        Tank.find(function (err, tanks) {

            if (err) res.send(err);

            res.json(tanks);
        });
    })
    .post('', function (req, res) {

        Tank.create({
            name: req.body.name
        }, function (err, tank) {

            if (err) res.send(err);

            Tank.find(function (err, tanks) {
                if (err) res.send(err);
                res.json(tanks);
            });
        });
    })
    .delete('/disconnect', function (req, res) {
        Tank.remove({name: req.body.name}, function (err, tank) {
            if (err) res.send(err);

            res.send('Bye' + req.body.name + '!');
        });
    });

    return router;
}

module.exports = tankRoutes;