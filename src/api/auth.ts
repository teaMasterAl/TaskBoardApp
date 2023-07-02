export const signUp = async (user) => {
  const response = await fetch('http://localhost:3001/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  })

  return await response.json()
}

// TODO сделать универсальную функцию для запросов к API
export const signIn = async (user) => {
    const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })

    return await response.json()
}
