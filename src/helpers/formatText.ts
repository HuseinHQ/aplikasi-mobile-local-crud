const formatText = (text: string): string => {
  if (text.length >= 20) {
    text = text.substring(0, 20);
    text += '...';
    return text;
  }

  return text;
};

export default formatText;
