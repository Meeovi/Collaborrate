"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstChecklistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstChecklistArgs_1 = require("./args/FindFirstChecklistArgs");
const Checklist_1 = require("../../../models/Checklist");
const helpers_1 = require("../../../helpers");
let FindFirstChecklistResolver = class FindFirstChecklistResolver {
    async findFirstChecklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Checklist_1.Checklist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstChecklistArgs_1.FindFirstChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstChecklistResolver.prototype, "findFirstChecklist", null);
FindFirstChecklistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Checklist_1.Checklist)
], FindFirstChecklistResolver);
exports.FindFirstChecklistResolver = FindFirstChecklistResolver;
