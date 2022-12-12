"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstChecklistOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstChecklistOrThrowArgs_1 = require("./args/FindFirstChecklistOrThrowArgs");
const Checklist_1 = require("../../../models/Checklist");
const helpers_1 = require("../../../helpers");
let FindFirstChecklistOrThrowResolver = class FindFirstChecklistOrThrowResolver {
    async findFirstChecklistOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstChecklistOrThrowArgs_1.FindFirstChecklistOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstChecklistOrThrowResolver.prototype, "findFirstChecklistOrThrow", null);
FindFirstChecklistOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Checklist_1.Checklist)
], FindFirstChecklistOrThrowResolver);
exports.FindFirstChecklistOrThrowResolver = FindFirstChecklistOrThrowResolver;
