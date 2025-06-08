//функция создания всех категорий и подкатегорий для компонента Aside

//функция принимает в качестве аргументов массив объектов с книгами,
//название категории и название подкатегории
  type Book = {
    [key: string]: any;
    category: string;
    subCategory: string;
  };
  type CategoryResult = {
    [key: string]: string[];
  };

  export const categoriesFromDataBase = (
    arr: Book[],
    cat: keyof Book,
    subCat: keyof Book,
  ): CategoryResult => {
    let result: CategoryResult = { ВСЕ: [] };

    //создаем объект, свойствами которого будут названия категорий. Значения свойств пустой массив
    const categoryKeys = arr
      .map((obj) => obj[cat])
      .reduce((accumulator, value) => {
        return { ...accumulator, [value]: '[]' };
      }, {});

    //в цикле проходим по объекту.
    //если текущий элемент массива объектов с книгами содержит название категории
    //который равен названию нашего свойства
    //мы создаем массив подкатегорий и в результирующий массив добавляем
    //текущий ключ со значением массива подкатегорий с исключением повторяющихся элементов
    for (let key in categoryKeys) {
      const subs = arr
        .filter((item) => item[cat] === key) //получаем массив объектов у котовых ключ равен "cat"
        .map((item) => item[subCat]); //получаем массив подкатегорий, которые относятся к категории "cat"
      result[key] = [...new Set(subs)]; //в результирующий массив добавляем свойство "cat" со значением массив уникальных подкатегорий
    }

    return result;
  };