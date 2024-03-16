console.log([-2, [-1, 3, [4]], 1, 2].flatMap((x) => (x < 0 ? [] : Math.sqrt(x))));
