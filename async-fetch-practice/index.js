const cart = [
    {
        title: "ABC",
        price: 100,
        amount: 2
    },
    {
        title: "DEF",
        price: 646,
        amount: 4
    },
    {
        title: "GHI",
        price: 651,
        amount: 5
    },
    {
        title: "JKL",
        price: 111,
        amount: 2
    },
    {
        title: "XYZ",
        price: 100,
        amount: 7
    },

]

let total = cart.reduce((total, cartItem) =>
{
    const { title: t, a, p } = cartItem;

    console.log(t);

    // Count ItemPs
    total.totalItem += a;

    // Count Sum
    total.totalAmount += (a * p);

    return total;
}, {
    totalItem: 0,
    totalAmount: 0
})

console.log(total)

const url = 'https://api.github.com/users/omkakatkar/repos?per_page=100';

const fetchRepos = async () =>
{
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const newData = data.reduce((total, repo) =>
    {
        const { language } = repo;

        if (language)
        {
            if (total[language])
            {
                total[language] += 1;
            } else
            {
                total[language] = 1;
            }
        }


        return total;
    }, {})
    console.log(newData);
}

fetchRepos();