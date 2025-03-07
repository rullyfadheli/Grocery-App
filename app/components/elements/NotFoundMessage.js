function NotFoundMessage({ data }) {
  return (
    <p className="h-96 w-full flex justify-center items-center font-bold text-primary">
      {data}
    </p>
  );
}

export default NotFoundMessage;
