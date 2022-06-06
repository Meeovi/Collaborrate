"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyUrl_rewritesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyUrl_rewritesArgs_1 = require("./args/FindManyUrl_rewritesArgs");
const Url_rewrites_1 = require("../../../models/Url_rewrites");
const helpers_1 = require("../../../helpers");
let FindManyUrl_rewritesResolver = class FindManyUrl_rewritesResolver {
    async findManyUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Url_rewrites_1.Url_rewrites], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUrl_rewritesArgs_1.FindManyUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyUrl_rewritesResolver.prototype, "findManyUrl_rewrites", null);
FindManyUrl_rewritesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Url_rewrites_1.Url_rewrites)
], FindManyUrl_rewritesResolver);
exports.FindManyUrl_rewritesResolver = FindManyUrl_rewritesResolver;
