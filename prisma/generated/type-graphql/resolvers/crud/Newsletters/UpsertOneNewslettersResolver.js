"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneNewslettersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneNewslettersArgs_1 = require("./args/UpsertOneNewslettersArgs");
const Newsletters_1 = require("../../../models/Newsletters");
const helpers_1 = require("../../../helpers");
let UpsertOneNewslettersResolver = class UpsertOneNewslettersResolver {
    async upsertOneNewsletters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Newsletters_1.Newsletters, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneNewslettersArgs_1.UpsertOneNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneNewslettersResolver.prototype, "upsertOneNewsletters", null);
UpsertOneNewslettersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletters_1.Newsletters)
], UpsertOneNewslettersResolver);
exports.UpsertOneNewslettersResolver = UpsertOneNewslettersResolver;
