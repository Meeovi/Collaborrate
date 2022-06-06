"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEmail_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyEmail_templatesArgs_1 = require("./args/CreateManyEmail_templatesArgs");
const Email_templates_1 = require("../../../models/Email_templates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyEmail_templatesResolver = class CreateManyEmail_templatesResolver {
    async createManyEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyEmail_templatesArgs_1.CreateManyEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyEmail_templatesResolver.prototype, "createManyEmail_templates", null);
CreateManyEmail_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Email_templates_1.Email_templates)
], CreateManyEmail_templatesResolver);
exports.CreateManyEmail_templatesResolver = CreateManyEmail_templatesResolver;
