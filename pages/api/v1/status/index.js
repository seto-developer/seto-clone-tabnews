function status(request, response) {
  response.status(200).json({ status: "Esta conexão está ok" });
}

export default status;
