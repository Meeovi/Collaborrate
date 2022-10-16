"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueChecklistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueChecklistArgs_1 = require("./args/FindUniqueChecklistArgs");
const Checklist_1 = require("../../../models/Checklist");
const helpers_1 = require("../../../helpers");
let FindUniqueChecklistResolver = class FindUniqueChecklistResolver {
    async checklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueChecklistArgs_1.FindUniqueChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueChecklistResolver.prototype, "checklist", null);
FindUniqueChecklistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Checklist_1.Checklist)
], FindUniqueChecklistResolver);
exports.FindUniqueChecklistResolver = FindUniqueChecklistResolver;
