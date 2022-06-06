"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSurveysResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateSurveysArgs_1 = require("./args/CreateSurveysArgs");
const Surveys_1 = require("../../../models/Surveys");
const helpers_1 = require("../../../helpers");
let CreateSurveysResolver = class CreateSurveysResolver {
    async createSurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Surveys_1.Surveys, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateSurveysArgs_1.CreateSurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateSurveysResolver.prototype, "createSurveys", null);
CreateSurveysResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Surveys_1.Surveys)
], CreateSurveysResolver);
exports.CreateSurveysResolver = CreateSurveysResolver;
