"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUrl_rewritesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueUrl_rewritesArgs_1 = require("./args/FindUniqueUrl_rewritesArgs");
const Url_rewrites_1 = require("../../../models/Url_rewrites");
const helpers_1 = require("../../../helpers");
let FindUniqueUrl_rewritesResolver = class FindUniqueUrl_rewritesResolver {
    async findUniqueUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Url_rewrites_1.Url_rewrites, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUrl_rewritesArgs_1.FindUniqueUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueUrl_rewritesResolver.prototype, "findUniqueUrl_rewrites", null);
FindUniqueUrl_rewritesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Url_rewrites_1.Url_rewrites)
], FindUniqueUrl_rewritesResolver);
exports.FindUniqueUrl_rewritesResolver = FindUniqueUrl_rewritesResolver;
