"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCommentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneCommentsArgs_1 = require("./args/UpsertOneCommentsArgs");
const Comments_1 = require("../../../models/Comments");
const helpers_1 = require("../../../helpers");
let UpsertOneCommentsResolver = class UpsertOneCommentsResolver {
    async upsertOneComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Comments_1.Comments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCommentsArgs_1.UpsertOneCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCommentsResolver.prototype, "upsertOneComments", null);
UpsertOneCommentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comments_1.Comments)
], UpsertOneCommentsResolver);
exports.UpsertOneCommentsResolver = UpsertOneCommentsResolver;
