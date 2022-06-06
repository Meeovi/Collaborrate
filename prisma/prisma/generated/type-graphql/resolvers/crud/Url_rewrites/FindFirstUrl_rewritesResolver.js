"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUrl_rewritesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstUrl_rewritesArgs_1 = require("./args/FindFirstUrl_rewritesArgs");
const Url_rewrites_1 = require("../../../models/Url_rewrites");
const helpers_1 = require("../../../helpers");
let FindFirstUrl_rewritesResolver = class FindFirstUrl_rewritesResolver {
    async findFirstUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUrl_rewritesArgs_1.FindFirstUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstUrl_rewritesResolver.prototype, "findFirstUrl_rewrites", null);
FindFirstUrl_rewritesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Url_rewrites_1.Url_rewrites)
], FindFirstUrl_rewritesResolver);
exports.FindFirstUrl_rewritesResolver = FindFirstUrl_rewritesResolver;
