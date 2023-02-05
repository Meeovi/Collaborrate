"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMediamanagerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyMediamanagerArgs_1 = require("./args/UpdateManyMediamanagerArgs");
const Mediamanager_1 = require("../../../models/Mediamanager");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyMediamanagerResolver = class UpdateManyMediamanagerResolver {
    async updateManyMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyMediamanagerArgs_1.UpdateManyMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyMediamanagerResolver.prototype, "updateManyMediamanager", null);
UpdateManyMediamanagerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mediamanager_1.Mediamanager)
], UpdateManyMediamanagerResolver);
exports.UpdateManyMediamanagerResolver = UpdateManyMediamanagerResolver;
