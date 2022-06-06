"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertInternalizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertInternalizationArgs_1 = require("./args/UpsertInternalizationArgs");
const Internalization_1 = require("../../../models/Internalization");
const helpers_1 = require("../../../helpers");
let UpsertInternalizationResolver = class UpsertInternalizationResolver {
    async upsertInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Internalization_1.Internalization, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertInternalizationArgs_1.UpsertInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertInternalizationResolver.prototype, "upsertInternalization", null);
UpsertInternalizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Internalization_1.Internalization)
], UpsertInternalizationResolver);
exports.UpsertInternalizationResolver = UpsertInternalizationResolver;
