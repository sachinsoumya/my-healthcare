import React from "react";

const Explore = ({ article, news, quiz, survey }) => {
  console.log(article);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-3">
        <div>
          <div className="font-bold text-lg text-center">
            Explore More on Hidoc dr.
          </div>

          <div className="text-justify">
            <div className="text-gray-400">News</div>

            <div className="font-bold text-lg">{news.title}</div>
            <div className="">{news.description}</div>

            <div className="text-gray-400">Published on {news.publishedAt}</div>
          </div>
        </div>

        <div>
          <div className="text-gray-400">
            CRITICAL CARE . <span>{article.createdAt}</span>
          </div>

          <div className="text-justify">
            <div className="text-gray-400">Article</div>

            <div className="font-bold text-lg">{article.articleTitle}</div>
            <div>{article.metaDescription}</div>

            <div className="text-gray-400">Published on {news.publishedAt}</div>
          </div>
        </div>

        <div>
          <div>
            <div className="text-gray-400">
              CRITICAL CARE . <span>{survey[0].createdAt}</span>
            </div>
            <div className="text-justify">
              <div className="text-gray-400">Survey</div>

              
              <div className="font-bold text-lg ">{survey[0].surveyName}</div>
              {/* <div>{article.metaDescription}</div>

            <div className="text-gray-400">Published on {news.publishedAt}</div> */}
            </div>
          </div>
          <div>
            <div className="text-gray-400">
              CRITICAL CARE . <span>{quiz.createdAt}</span>
            </div>
            <div className="text-justify">
              <div className="text-gray-400">Quiz</div>

              <div className="font-bold text-lg ">
                {quiz.metaDescription}
              </div>
             
              {/* <div>{article.metaDescription}</div>

            <div className="text-gray-400">Published on {news.publishedAt}</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
