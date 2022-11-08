"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneEndofshiftResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneEndofshiftArgs_1 = require("./args/DeleteOneEndofshiftArgs");
const Endofshift_1 = require("../../../models/Endofshift");
const helpers_1 = require("../../../helpers");
let DeleteOneEndofshiftResolver = class DeleteOneEndofshiftResolver {
    async deleteOneEndofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Endofshift_1.Endofshift, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneEndofshiftArgs_1.DeleteOneEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneEndofshiftResolver.prototype, "deleteOneEndofshift", null);
DeleteOneEndofshiftResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Endofshift_1.Endofshift)
], DeleteOneEndofshiftResolver);
exports.DeleteOneEndofshiftResolver = DeleteOneEndofshiftResolver;
