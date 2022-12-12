"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneChecklistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneChecklistArgs_1 = require("./args/CreateOneChecklistArgs");
const Checklist_1 = require("../../../models/Checklist");
const helpers_1 = require("../../../helpers");
let CreateOneChecklistResolver = class CreateOneChecklistResolver {
    async createOneChecklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Checklist_1.Checklist, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneChecklistArgs_1.CreateOneChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneChecklistResolver.prototype, "createOneChecklist", null);
CreateOneChecklistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Checklist_1.Checklist)
], CreateOneChecklistResolver);
exports.CreateOneChecklistResolver = CreateOneChecklistResolver;
