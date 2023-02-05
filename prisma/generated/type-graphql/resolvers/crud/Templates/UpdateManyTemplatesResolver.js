"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTemplatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTemplatesArgs_1 = require("./args/UpdateManyTemplatesArgs");
const Templates_1 = require("../../../models/Templates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTemplatesResolver = class UpdateManyTemplatesResolver {
    async updateManyTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTemplatesArgs_1.UpdateManyTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTemplatesResolver.prototype, "updateManyTemplates", null);
UpdateManyTemplatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Templates_1.Templates)
], UpdateManyTemplatesResolver);
exports.UpdateManyTemplatesResolver = UpdateManyTemplatesResolver;
