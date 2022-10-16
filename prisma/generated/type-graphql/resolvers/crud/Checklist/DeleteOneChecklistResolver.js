"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneChecklistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneChecklistArgs_1 = require("./args/DeleteOneChecklistArgs");
const Checklist_1 = require("../../../models/Checklist");
const helpers_1 = require("../../../helpers");
let DeleteOneChecklistResolver = class DeleteOneChecklistResolver {
    async deleteOneChecklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneChecklistArgs_1.DeleteOneChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneChecklistResolver.prototype, "deleteOneChecklist", null);
DeleteOneChecklistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Checklist_1.Checklist)
], DeleteOneChecklistResolver);
exports.DeleteOneChecklistResolver = DeleteOneChecklistResolver;
