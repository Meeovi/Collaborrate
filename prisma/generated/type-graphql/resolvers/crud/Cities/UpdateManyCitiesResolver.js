"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyCitiesArgs_1 = require("./args/UpdateManyCitiesArgs");
const Cities_1 = require("../../../models/Cities");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCitiesResolver = class UpdateManyCitiesResolver {
    async updateManyCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCitiesArgs_1.UpdateManyCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCitiesResolver.prototype, "updateManyCities", null);
UpdateManyCitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cities_1.Cities)
], UpdateManyCitiesResolver);
exports.UpdateManyCitiesResolver = UpdateManyCitiesResolver;
