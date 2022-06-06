"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReturnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertReturnsArgs_1 = require("./args/UpsertReturnsArgs");
const Returns_1 = require("../../../models/Returns");
const helpers_1 = require("../../../helpers");
let UpsertReturnsResolver = class UpsertReturnsResolver {
    async upsertReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Returns_1.Returns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertReturnsArgs_1.UpsertReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertReturnsResolver.prototype, "upsertReturns", null);
UpsertReturnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], UpsertReturnsResolver);
exports.UpsertReturnsResolver = UpsertReturnsResolver;
