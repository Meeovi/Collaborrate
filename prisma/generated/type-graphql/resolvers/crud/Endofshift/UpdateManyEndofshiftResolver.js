"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEndofshiftResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyEndofshiftArgs_1 = require("./args/UpdateManyEndofshiftArgs");
const Endofshift_1 = require("../../../models/Endofshift");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyEndofshiftResolver = class UpdateManyEndofshiftResolver {
    async updateManyEndofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyEndofshiftArgs_1.UpdateManyEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyEndofshiftResolver.prototype, "updateManyEndofshift", null);
UpdateManyEndofshiftResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Endofshift_1.Endofshift)
], UpdateManyEndofshiftResolver);
exports.UpdateManyEndofshiftResolver = UpdateManyEndofshiftResolver;
