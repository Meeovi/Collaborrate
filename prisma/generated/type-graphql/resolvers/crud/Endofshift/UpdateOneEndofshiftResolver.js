"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneEndofshiftResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneEndofshiftArgs_1 = require("./args/UpdateOneEndofshiftArgs");
const Endofshift_1 = require("../../../models/Endofshift");
const helpers_1 = require("../../../helpers");
let UpdateOneEndofshiftResolver = class UpdateOneEndofshiftResolver {
    async updateOneEndofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneEndofshiftArgs_1.UpdateOneEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneEndofshiftResolver.prototype, "updateOneEndofshift", null);
UpdateOneEndofshiftResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Endofshift_1.Endofshift)
], UpdateOneEndofshiftResolver);
exports.UpdateOneEndofshiftResolver = UpdateOneEndofshiftResolver;
