"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProject_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyProject_templatesArgs_1 = require("./args/CreateManyProject_templatesArgs");
const Project_templates_1 = require("../../../models/Project_templates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyProject_templatesResolver = class CreateManyProject_templatesResolver {
    async createManyProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProject_templatesArgs_1.CreateManyProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyProject_templatesResolver.prototype, "createManyProject_templates", null);
CreateManyProject_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_templates_1.Project_templates)
], CreateManyProject_templatesResolver);
exports.CreateManyProject_templatesResolver = CreateManyProject_templatesResolver;
