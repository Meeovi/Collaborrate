"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChecklistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateChecklistArgs_1 = require("./args/AggregateChecklistArgs");
const Checklist_1 = require("../../../models/Checklist");
const AggregateChecklist_1 = require("../../outputs/AggregateChecklist");
const helpers_1 = require("../../../helpers");
let AggregateChecklistResolver = class AggregateChecklistResolver {
    async aggregateChecklist(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateChecklist_1.AggregateChecklist, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateChecklistArgs_1.AggregateChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateChecklistResolver.prototype, "aggregateChecklist", null);
AggregateChecklistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Checklist_1.Checklist)
], AggregateChecklistResolver);
exports.AggregateChecklistResolver = AggregateChecklistResolver;
