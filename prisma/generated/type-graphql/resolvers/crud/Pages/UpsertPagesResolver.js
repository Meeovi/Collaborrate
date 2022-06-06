"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertPagesArgs_1 = require("./args/UpsertPagesArgs");
const Pages_1 = require("../../../models/Pages");
const helpers_1 = require("../../../helpers");
let UpsertPagesResolver = class UpsertPagesResolver {
    async upsertPages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pages_1.Pages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertPagesArgs_1.UpsertPagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertPagesResolver.prototype, "upsertPages", null);
UpsertPagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pages_1.Pages)
], UpsertPagesResolver);
exports.UpsertPagesResolver = UpsertPagesResolver;
