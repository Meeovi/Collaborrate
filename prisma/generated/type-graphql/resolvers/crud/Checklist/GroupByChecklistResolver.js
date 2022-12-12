"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByChecklistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByChecklistArgs_1 = require("./args/GroupByChecklistArgs");
const Checklist_1 = require("../../../models/Checklist");
const ChecklistGroupBy_1 = require("../../outputs/ChecklistGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByChecklistResolver = class GroupByChecklistResolver {
    async groupByChecklist(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ChecklistGroupBy_1.ChecklistGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByChecklistArgs_1.GroupByChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByChecklistResolver.prototype, "groupByChecklist", null);
GroupByChecklistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Checklist_1.Checklist)
], GroupByChecklistResolver);
exports.GroupByChecklistResolver = GroupByChecklistResolver;
