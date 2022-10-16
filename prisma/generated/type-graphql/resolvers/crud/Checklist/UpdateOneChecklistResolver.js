"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneChecklistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneChecklistArgs_1 = require("./args/UpdateOneChecklistArgs");
const Checklist_1 = require("../../../models/Checklist");
const helpers_1 = require("../../../helpers");
let UpdateOneChecklistResolver = class UpdateOneChecklistResolver {
    async updateOneChecklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Checklist_1.Checklist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneChecklistArgs_1.UpdateOneChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneChecklistResolver.prototype, "updateOneChecklist", null);
UpdateOneChecklistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Checklist_1.Checklist)
], UpdateOneChecklistResolver);
exports.UpdateOneChecklistResolver = UpdateOneChecklistResolver;
