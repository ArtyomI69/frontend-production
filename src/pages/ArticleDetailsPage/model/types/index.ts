import { ArticleDetailsRecomendationsSchema } from './ArticleDetailsRecomendationsSchema';
import { ArticleDetailsCommentSchema } from './ArticleDetailsSchema';

export interface ArticleDetailsPageSchema {
  comment: ArticleDetailsCommentSchema;
  recomendations: ArticleDetailsRecomendationsSchema;
}
