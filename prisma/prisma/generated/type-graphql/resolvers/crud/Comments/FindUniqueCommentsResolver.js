"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCommentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueCommentsArgs_1 = require("./args/FindUniqueCommentsArgs");
const Comments_1 = require("../../../models/Comments");
const helpers_1 = require("../../../helpers");
let FindUniqueCommentsResolver = class FindUniqueCommentsResolver {
    async findUniqueComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Comments_1.Comments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCommentsArgs_1.FindUniqueCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCommentsResolver.prototype, "findUniqueComments", null);
FindUniqueCommentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comments_1.Comments)
], FindUniqueCommentsResolver);
exports.FindUniqueCommentsResolver = FindUniqueCommentsResolver;
